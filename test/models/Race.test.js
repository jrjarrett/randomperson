const expect = require('chai').expect

const Race = require('../../models/Race')

describe('Race', function () {
  it('should be invalid if definition is empty', function (done) {
    const e = new Race();

    e.validate(function (err) {
      expect(err.errors.definition).to.exist;
      done();
    })
  })

  it('Race description should not be less than 3 chars', function (done) {
    const e = new Race( { definition: 'x'} );

    e.validate(function (err) {
      expect(err.errors.definition).to.exist;
      expect(err.errors.definition.kind).to.equal('minlength');
      done();
    });
  });


  it('Race definition should not be more than 100 chars', function (done) {
    const e = new Race( { definition: 'jkldsfjkldsiofxjkldsfjkldsiofxjkldsfjkldsiofxjkldsfjkldsiofxjkldsfjkldsiofxjkldsfjkldsiofxjkldsfjkldsiofxjkldsfjkldsiofxjkldsfjkldsiofxjkldsfjkldsiofxjkldsfjkldsiofxjkldsfjkldsiofxjkldsfjkldsiofxjkldsfjkldsiofxjkldsfjkldsiofxjkldsfjkldsiofxjkldsfjkldsiofxjkldsfjkldsiofxjkldsfjkldsiofxjkldsfjkldsiofx'} );

    e.validate(function (err) {
      expect(err.errors.definition).to.exist;
      expect(err.errors.definition.kind).to.equal('maxlength');
      done();
    });
  });

  it('Race should return a virtual URL', function (done) {
    const e = new Race( { definition: 'Other'} );

    e.validate(function (err) {
      expect(err).to.be.null;
    });
    expect(e.url).to.not.be.null;
    expect(e.url).to.equal('/race/' + e._id);
    done();
  });


})