
import { expect } from 'chai'
import { getAll } from './articles.service'

describe('Articles Controller', () => {
  describe('getAll', () => {
    it('should return an array of articles', async () => {
      const response = await getAll()
      expect(response.statusCode).to.equal(200)
      expect(response.body).to.be.an('array')
      expect(response.body[0]).to.have.property('title')
    })
  })
})
