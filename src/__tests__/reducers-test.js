import expect from 'expect';
import reducer from '../../src/reducers/todos'

describe('todos reducer', () => {
    it('should return the initial state', () => {
        expect(
            reducer(undefined, {})
        ).toEqual([
            {
                text: 'Use Redux',
                completed: false,
                createdAt: undefined,
                id: 0
            }
        ])
    })

    it('should handle ADD_TODO', () => {
        expect(
            reducer([], {
                type: "ADD_TODO",
                text: 'Run the tests'
            })
        ).toEqual(
            [
                {
                    text: 'Run the tests',
                    completed: false,
                    id: 0
                }
            ]
        )

        expect(
            reducer(
                [
                    {
                        text: 'Use Redux',
                        completed: false,
                        id: 0
                    }
                ],
                {
                    type: "ADD_TODO",
                    text: 'Run the tests'
                }
            )
        ).toEqual(
            [
                {
                    text: 'Run the tests',
                    completed: false,
                    id: 1
                },
                {
                    text: 'Use Redux',
                    completed: false,
                    id: 0
                }
            ]
        )
    })
})