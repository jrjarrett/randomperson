/**
 *
 * A Route to CRUD Master Patient Records.
 *
 * GET /mpr
 *    Gets all the master patient records
 *    /mpr/mrn/{mrn}
 *    Gets a specific master patient record by mrn
 *    /mpr/lastname/{last name}
 *    Gets all master patient records that match last name
 *
 */
const express = require('express');
const router = express