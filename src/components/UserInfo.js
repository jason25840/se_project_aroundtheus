export default class UserInfo {
  constructor(nameSelector, descriptionSelector, userAvatarSelector) {
    this._nameElement = document.querySelector(nameSelector);
    this._descriptionElement = document.querySelector(descriptionSelector);
    this._userAvatar = document.querySelector(userAvatarSelector);//userAvatar;
  }

  getUserInfo() {
    return {
      name: this._nameElement.textContent,
      description: this._descriptionElement.textContent,
      avatar :this._userAvatar.src
    };
  }

  setUserInfo({ name, about }) {
    this._nameElement.textContent = name;
    this._descriptionElement.textContent = about;
  }

  setUserAvatar(avatar) {
    this._userAvatar.src = avatar.avatar
  }
}

