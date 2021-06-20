import { sortComments } from '../../src/utils'

describe('utils', () => {
    describe('sortComments', () => {
        const mockComments = [
            {
                created: '2021-06-19 16:38:25'
            },
            {
                created: '2021-06-19 17:58:36',
            }
        ]
        it('should sort the comments from most to least recent', () => {
            const solution = [
                {
                    created: '2021-06-19 17:58:36',
                },
                {
                    created: '2021-06-19 16:38:25'
                }
            ]
            expect(sortComments(mockComments)).toEqual(solution);
        })
    })
})