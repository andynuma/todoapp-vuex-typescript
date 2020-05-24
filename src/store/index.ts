import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

import { TodosState } from './modules/todos';

export type Rootstate = {
  todos: TodosState;
};

export default new Vuex.Store<Rootstate>({});
