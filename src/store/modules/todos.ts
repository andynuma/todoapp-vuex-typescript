import {
  Mutation,
  Module,
  VuexModule,
  getModule,
  Action,
} from 'vuex-module-decorators';
import store from '../index';

export type Todo = {
  id: number;
  content: string;
  done: boolean;
};

export type TodosState = {
  todos: Todo[];
};

const initialState: Todo[] = [
  {
    id: 0,
    content: 'todo1',
    done: false,
  },
  {
    id: 1,
    content: 'test2',
    done: false,
  },
  {
    id: 2,
    content: 'test3',
    done: false,
  },
];

@Module({ dynamic: true, store: store, name: 'todo', namespaced: true })
class Todos extends VuexModule implements TodosState {
  todos: Todo[] = initialState;

  @Mutation
  private ADDTODO(text: string) {
    this.todos.push({
      id: this.todos.length,
      content: text,
      done: false,
    });
  }

  @Mutation
  private DELETETODO(id: number) {
    this.todos = this.todos.filter((todo) => todo.id !== id);
  }

  @Action
  public addTodo(text: string) {
    this.ADDTODO(text);
  }

  @Action
  public deleteTodo(id: number) {
    this.DELETETODO(id);
  }
}

export const todosModule = getModule(Todos);
