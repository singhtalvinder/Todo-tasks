import { Todo } from './todo';

describe('Todo', () => {
  it('should create an instance', () => {
    expect(new Todo()).toBeTruthy();
  });

  it('should accept values in the constructor', () => {
    let todo = new  Todo({
      title: 'second test',
      complete : true
    });
    expect(todo.title).toEqual('second test');
    expect(todo.complete).toEqual(true);
  });
});
