import { todoReducer, initialState } from './to-dos.reducer';

describe('ToDos Reducer', () => {
  describe('unknown action', () => {
    it('should return the initial state', () => {
      const action = {} as any;

      const result = todoReducer(initialState, action);

      expect(result).toBe(initialState);
    });
  });
});
