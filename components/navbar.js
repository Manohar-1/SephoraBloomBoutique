function navbar() {
  return ` 
    <div id="offerbar">
      <p>
        We offer FREE Standard 1-3 Day Shipping on all US and Canada merchandise
        <b onclick="togglePopup()">SEE DETAILS</b>
      </p>

      <div class="popup" id="popup-1">
        <div class="overlay"></div>
        <div class="content">
          <div class="close-btn" onclick="togglePopup()">&times;</div>
          <p>
            We offer
            <b>FREE</b> Standard 1-3 Day Shipping on all US and Canada
            merchandise orders for Beauty Insider members, no minimum purchase
            required. Guest checkout orders receive FREE standard 1–3 day
            shipping with $50 minimum purchase. The standard shipping benefit is
            not valid on international shipping or on Kohls.com. <br />
            <br />
            You must check out with a valid Beauty Insider account to receive
            the standard shipping Benefit. Benefit has no cash value. No
            adjustments on previous purchases. Benefit is non-transferable.
            Benefit subject to change, alteration, or termination by Sephora in
            its sole discretion at any time. <br /><br />
            To sign up for our free loyalty program,
            <a href="">visit our Beauty Insider Page.▸</a>
          </p>
        </div>
      </div>
    </div>
    <div id="mainbar">
      <p id="logo">SEPHORA</p>
      <input type="text" placeholder="Search" />

      <ul>
        <li>Stores and Services</li>
        <li>Community</li>
        <li>SignIn</li>
        <li><i class="fa-regular fa-heart"></i></li>
        <li><i class="fa-solid fa-cart-shopping"></i></li>
      </ul>
      <div id="details">The World Of Sephora</div>
    </div>
    <div id="blackbar">
      <ul>
        <li id='dropdown1'>New</li>
        <li id='dropdown2'>Brands</li>
        <li id='dropdown3'>Makeup</li>
        <li id='dropdown4'>Skincare</li>
        <li id='dropdown5'>Hair</li>
        <li id='dropdown6'>Fragrance</li>
        <li id='dropdown7'>Tools & Brushes</li>
        <li id='dropdown8'>Bath & Body</li>
        <li id='dropdown9'>Mini Size</li>
        <li id='dropdown10'>Gifts</li>
        <li id='dropdown11'>Beauty Under 20$</li>
        <li id='dropdown12'>Sale & Offers</li>
      </ul>
    </div>
    <div class="sipopup" id="sipopup-1">
      <div class="sioverlay"></div>
      <div class="sicontent">
        <div class="siclose-btn">&times;</div>
        <h2>Sign In</h2>
        <p>
          Sign in or create an account to enjoy <b>FREE standard shipping</b> on
          all orders.
        </p>
        <input id="l_username" type="text" placeholder="Username*" />
        <input id="l_password" type="password" placeholder="Password*" />
        <button id="signIn">Sign In</button>
        <p><b>New to Sephora?</b></p>
        <button id="createAccount">Create Account</button>
        <p id="terms">Terms of Use & Privacy Policy</p>
      </div>
    </div>

    <div class="supopup" id="supopup-1">
      <div class="suoverlay"></div>
      <div class="sucontent">
        <div class="suclose-btn">&times;</div>
        <h3>Create an Account</h3>
        <h2>Beauty INSIDER</h2>
        <p>
          Join the Beauty Insider loyalty program. Earn points, get
          <b>FREE standard shipping</b>,redeem rewards, and more.
        </p>
        <input type="text" id="name" placeholder="Name" />

        <input type="email" id="email" placeholder="Email Address" />
        <input type="text" id="username" placeholder="Username" />
        <input
          type="text"
          id="password"
          placeholder="Password(minimum 8 characters, should include 1 special character)"
        />
        <input type="number" id="phnumber" placeholder="Phone Number" />
        <p>
          <b>NOTE:</b>Enter your birthdate to receive a free gift every year.
        </p>
        <input type="date" />
        
        <input type="text" id="desc" placeholder="Description" />
        <button id="signUpButton">Join Now</button>
      </div>
    </div>`;
}

export { navbar };
