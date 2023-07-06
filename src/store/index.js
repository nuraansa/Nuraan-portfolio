import { createStore } from "vuex";

const dataURL = "https://nuraansa.github.io/eomp_json/";

export default createStore({
  state: {
    hobbies: null,
    skills: null,
    education: null,
    projects: null,
    testimonials: null,
  },
  getters: {},
  mutations: {
    setHobbies(state, value) {
      state.hobbies = value;
    },
    setSkills(state, value) {
      state.skills = value;
    },
    setEducation(state, value) {
      state.education = value;
    },
    setExperience(state, value) {
      state.experience = value;
    },
    setProjects(state, value) {
      state.projects = value;
    },
    setTestimonials(state, value) {
      state.testimonials = value;
    },
  },
  actions: {
    async fetchHobbies(context) {
      try {
        let res = await fetch(dataURL);
        let { hobbies } = await res.json();
        if (hobbies) {
          context.commit("setHobbies", hobbies);
        } else {
          context.commit("setHobbies", hobbies);
        }
      } catch (e) {
        console.log(e.message);
      }
    },
    async fetchSkills(context) {
      try {
        let res = await fetch(dataURL);
        let { skills } = await res.json();
        if (skills) {
          context.commit("setSkills", skills);
        } else {
          context.commit("setSkills", skills);
        }
      } catch (e) {
        console.log(e.message);
      }
    },
    async fetchEducation(context) {
      try {
        let res = await fetch(dataURL);
        let { education } = await res.json();
        if (education) {
          context.commit("setEducation", education);
        } else {
          context.commit("setEducation", education);
        }
      } catch (e) {
        console.log(e.message);
      }
    },
    async fetchExperience(context) {
      try {
        let res = await fetch(dataURL);
        let { experience } = await res.json();
        if (experience) {
          context.commit("setExperience", experience);
        } else {
          context.commit("setExperience", experience);
        }
      } catch (e) {
        console.log(e.message);
      }
    },
    async fetchProjects(context) {
      try {
        let res = await fetch(dataURL);
        let { projects } = await res.json();
        if (projects) {
          context.commit("setProjects", projects);
        } else {
          context.commit("setProjects", projects);
        }
      } catch (e) {
        console.log(e.message);
      }
    },
    async fetchTestimonials(context) {
      try {
        let res = await fetch(dataURL);
        let { testimonials } = await res.json();
        if (testimonials) {
          context.commit("setTestimonials", testimonials);
        } else {
          context.commit("setTestimonials", testimonials);
        }
      } catch (e) {
        console.log(e.message);
      }
    },
  },
  modules: {},
});
