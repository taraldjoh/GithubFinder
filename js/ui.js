class UI {
  constructor() {
    this.profile = document.getElementById("profile");
  }
  // Display Profile in UI
  showProfile(user) {
    this.profile.innerHTML = `
    <div class="card card-body mb-3">
        <div class="row">
            <div class="col-md-3">
                <img class="img-fluid mb-2" src="${user.avatar_url}">
                <a href="${
                  user.html_url
                }" target="_blank" class="btn btn-primary btn-block">View Profile</a>
            </div>
            <div class="col-md-9">
                <span class="badge badge-primary">Public Repos: ${
                  user.public_repos
                }</span>
                <span class="badge badge-secondary">Public Gists: ${
                  user.gists
                }</span>
                <span class="badge badge-success">Followers: ${
                  user.followers
                }</span>
                <span class="badge badge-info">Following: ${
                  user.following
                }</span>
                <br><br>
                <ul class="list-group">
                    <li class="list-group-item">Company: ${user.company}</li>
                    <li class="list-group-item">Website / Blog: ${
                      user.blog
                    }</li>
                    <li class="list-group-item">Location: ${user.location}</li>
                    <li class="list-group-item">Member Since: ${
                      user.created
                    }</li>
                </ul>
            </div>
        </div>
    </div>
    <h3 class="page-heading mb-3">Latest Repositories</h3>
    <div id="repos"></div>
    `;
  }

  // Show Alert Message
  showAlert(message, className) {
    // Clear Any Remaining alerts
    this.clearAlert();
    // Create Div
    const div = document.createElement("div");
    // Add Class
    div.className = className;
    // Add Text
    div.appendChild(document.createTextNode(message));
    //Get Parent
    const container = document.querySelector(".searchContainer");
    // Get Search Box
    const search = document.querySelector(".search");
    // Insert Alert
    container.insertBefore(div, search);

    ui.profile.innerHTML = "";
    // Clear Alert After 2,5 seconds
    setTimeout(() => {
      this.clearAlert();
    }, 2500);
  }

  // Clear Alert Message
  clearAlert() {
    const currentAlert = document.querySelector(".alert");

    if (currentAlert) {
      currentAlert.remove();
    } else {
    }
  }

  // Clear Profile
  clearProfile() {
    this.profile.innerHTML = "";
  }
}
