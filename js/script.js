// this javascript auto injects the navbar and footer for each page...
document.addEventListener('DOMContentLoaded', function() {
let footer = document.getElementsByTagName('footer');
let header = document.getElementsByTagName('header');

const footerContent = `
  <div class="container-fluid aic_footer">
    <div>2024@AiCoaches</div>
    <div>Support</div>
  </div>
`;

const headerContent = `
<nav class="navbar navbar-expand-lg" style="background: #fff;">
<div class="container-fluid">
  <a class="navbar-brand" href="#"><img src="./images/logo-dark.svg" style="height: 50px;"></a>
  <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse justify-content-end" id="navbarNavDropdown">
    <ul class="navbar-nav">
      <li class="nav-item">
        <a class="nav-link active" aria-current="page" href="index.html">Workspace</a>
      </li>
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          Other Leads
        </a>
        <ul class="dropdown-menu">
          <li>
            <a class="dropdown-item" href="orders.html">
            <div class="aic_aaa">
              <i class="bi bi-cart3"></i><span>Manage Orders</span>
            </div>
            </a>
          </li>
          <li>
            <a class="dropdown-item" href="leads.html">
            <div class="aic_aaa">
              <i class="bi bi-stack"></i><span>My Leads</span>
            </div>
            </a>
          </li>
        </ul>
      </li>
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
         Visitor Response
        </a>

        <ul class="dropdown-menu">
          <li>
            <a class="dropdown-item" href="conservation.html">
            <div class="aic_aaa">
              <i class="bi bi-chat-square-text-fill"></i><span>Conversation</span>
            </div>
            </a>
          </li>
          <li>
            <a class="dropdown-item" href="youtube-library.html">
            <div class="aic_aaa">
              <i class="bi bi-youtube"></i><span>Youtube Library</span>
            </div>
            </a>
          </li>
        </ul>
      
      <li class="nav-item">
        <a class="nav-link" href="analytics.html">Analytics</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="integrations.html">Integration</a>
      </li>
      
      <div class="dropdown-center">
          <button type="button" class="btn user_menu_btn" data-bs-toggle="dropdown" data-bs-display="static" aria-expanded="false">
          <i class="bi bi-person-fill"></i>
          </button>
          <div class="dropdown-menu dropdown-menu-lg-end p-4 user_menu" style="width: 300px;">
              <div class="user_menu_area">
                <div class="user_menu_thumb">VA</div>
                <div class="user_detail">
                <b>Vacationleader</b>
                <span>vacationleader@me.com</span>
                </div>
              </div>
              <hr/>
              <div class="credit_area">
                <div class="credit_item">
                <b>Free Credits</b>
                <span>9999/999</span>
                </div>
                <div class="credit_item">
                  <b>Available Characters</b>
                  <span>9999/9999</span>
                </div>
              </div>
              <hr/>
              <a href="/"><div class="user_menu_item">Knowledgebase</div></a>
              <a href="/"><div class="user_menu_item">Tutorial Videos</div></a>
              <a href="/"><div class="user_menu_item">Account Settings</div></a>
              <a href="/auth/Login.html"><div class="user_menu_item">Sign Out</div></a>

          </div>
        </div>
      
    </ul>
  </div>
</div>
</nav>
`;


// Convert HTMLCollection to array
let footerArray = Array.from(footer);
let headerArray = Array.from(header);

if (footerArray.length > 0 && headerArray.length > 0) {
    console.log('footer & header found...');
    footerArray.forEach(element => element.innerHTML = footerContent);
    headerArray.forEach(element => element.innerHTML = headerContent);
    console.log('footer & header injected!');
} else {
    console.log('footer and header missing...');
};


});
