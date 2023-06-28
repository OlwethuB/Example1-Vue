import { createStore } from "vuex";

export default createStore({
  state: {
    properties: null,
    property: null,
    user: null,
    asc: true,
  },

  mutations: {
    setUser: (state, user) => {
      state.user = user;
    },
    setProperties: (state, properties) => {
      state.properties = properties;
    },
    setProperty: (state, property) => {
      state.property = property;
    },
    sortPropertiesByPrice: (state) => {
      state.properties.sort((a, b) => {
        return a.price - b.price;
      });
      if (!state.asc) {
        state.properties.reverse();
      }
      state.asc = !state.asc;
    },
  },
  actions: {
    login: async (context, payload) => {
      const { email, password } = payload;

      const response = await fetch(
        `http://localhost:3000/users?email=${email}&password=${password}`
      );
      const userData = await response.json();
      context.commit("setUser", userData[0]);
    },
    register: (context, payload) => {
      const { full_name, email, password } = payload;
      fetch("http://localhost:3000/users", {
        method: "POST",
        body: JSON.stringify({
          full_name: full_name,
          email: email,
          password: password,
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
        .then((response) => response.json())
        .then((json) => context.commit("setUser", json));
    },
    getProperties: async (context) => {
      fetch("http://localhost:3000/properties")
        .then((res) => res.json())
        .then((properties) => context.commit("setProperties", properties));
    },
    getProperty: async (context, id) => {
      fetch("http://localhost:3000/properties/" + id)
        .then((res) => res.json())
        .then((property) => context.commit("setProperty", property));
    },
  },
});
