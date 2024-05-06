export default class UserInfo {
  constructor({ nameSelector, jobSelector }) {
    this._nameElement = document.querySelector(nameSelector);
    this._jobElement = document.querySelector(jobSelector);
  }

  getUserInfo() {
    return {
      name: this._nameElement,
      job: this._jobElement,
    };
  }

  setUserInfo({ name, job }) {
    this._nameElement = name;
    this._jobElement = job;
  }
}
