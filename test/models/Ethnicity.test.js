const expect = require('chai').expect

const Ethnicity = require('../../models/Ethnicity')

describe('Ethnicity', function () {
  it('should be invalid if definition is empty', function (done) {
    const e = new Ethnicity();

    e.validate(function (err) {
      expect(err.errors.definition).to.exist;
      done();
    })
  })

  it('Ethnicity description should not be less than 3 chars', function (done) {
    const e = new Ethnicity( { definition: 'x'} );

    e.validate(function (err) {
      expect(err.errors.definition).to.exist;
      expect(err.errors.definition.kind).to.equal('minlength');
      done();
    });
  });


  it('Ethnicity definition should not be more than 100 chars', function (done) {
    const e = new Ethnicity( { definition: 'jkldsfjkldsiofxjkldsfjkldsiofxjkldsfjkldsiofxjkldsfjkldsiofxjkldsfjkldsiofxjkldsfjkldsiofxjkldsfjkldsiofxjkldsfjkldsiofxjkldsfjkldsiofxjkldsfjkldsiofxjkldsfjkldsiofxjkldsfjkldsiofxjkldsfjkldsiofxjkldsfjkldsiofxjkldsfjkldsiofxjkldsfjkldsiofxjkldsfjkldsiofxjkldsfjkldsiofxjkldsfjkldsiofxjkldsfjkldsiofx'} );

    e.validate(function (err) {
      expect(err.errors.definition).to.exist;
      expect(err.errors.definition.kind).to.equal('maxlength');
      done();
    });
  });

  it('Ethnicity should return a virtual URL', function (done) {
    const e = new Ethnicity( { definition: 'Other'} );

    e.validate(function (err) {
      expect(err).to.be.null;
    });
    expect(e.url).to.not.be.null;
    expect(e.url).to.equal('/ethnicity/' + e._id);
    done();
  });
})