const expect = require('chai').expect;
const sort = require('../app');
const request = require('supertest');
const app = require('../app');

const result = app.sort([
    4,
    5,
    7,
    11,
    1,
    6
]);

describe('Sort function', () => {
    it('should contain all numbers', () => {
        expect(result)
            .to
            .be
            .an('array');
    }),

    it('should contain all numbers', () => {
        expect(result)
            .to
            .deep
            .equal([
                1,
                4,
                5,
                6,
                7,
                11
            ])
    })
})
