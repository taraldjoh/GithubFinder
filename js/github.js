class Github {
  constructor() {
    this.client_id = "ee39a193c5efde9ff400";
    this.client_secret = "a353f1c5214dc40f2d99369ba4283b306dd69022";
  }

  async getUser(user) {
    const profileResponse = await fetch(
      `https://api.github.com/users/${user}?client_id=${
        this.client_id
      }&client_secret=${this.client_secret}`
    );

    const profile = await profileResponse.json();

    return {
      profile
    };
  }
}
