const { starRating } = require('./utils')

const header = () => {
  return `
  <nav class="red darken-3">
    <div class="nav-wrapper container">
      <a href="/" class="brand-logo">
        gSnacks
      </a>
      <ul id="nav-mobile" class="right hide-on-med-and-down">
        <li>
          <a href="./signup.html">
            <i class="tiny material-icons">account_circle</i> Signup
          </a>
        </li>
        <li>
          <a href="./login.html">
            <i class="tiny material-icons">verified_user</i> Login
          </a>
        </li>
      </ul>
    </div>
  </nav>`
}

const headerLogin = ( email ) => {
  return `
  <nav class="red darken-3">
    <div class="nav-wrapper container">
      <a href="/" class="brand-logo">
        gSnacks
      </a>
      <ul id="nav-mobile" class="right hide-on-med-and-down">
        <li>
          <a href="./signup.html">
            <i class="tiny material-icons">account_circle</i> Hello ${ email }
          </a>
        </li>
        <li>
          <a class="logout" href="./login.html">
            <i class="tiny material-icons">verified_user</i> Logout
          </a>
        </li>
      </ul>
    </div>
  </nav>`
}

const footer = () => {
  return `
    <div class="container footer-copyright">
      <p>
        <strong>&copy; 2018 ComicScore</strong> by <a href="https://katrina.surge.sh" target="_blank">Katrina Agustin</a>
      </p>
    </div>`
}

const form = () => {
  return `
    <form id="form" class="form col s12 m8">
      <h3>Love it? Hate it? Rate it!</h3>
      <div class="input-field">
        <input id="title" type="text" data-length="50" class="validate" required>
        <label for="title">Title</label>
        <span class="helper-text" data-error="oops! something is wrong..." data-success="looking good!">example: Amazing Spiderman #1</span>
      </div>
      <div class="input-field">
        <input id="image_url" type="url" pattern="^(http|https):([/|.|\\w|\\s|-])*\\.(?:jpg|gif|png)" class="validate" required>
        <label for="image_url">Image URL</label>
        <span class="helper-text" data-error="please use a valid image URL" data-success="looking good!"></span>
      </div>
      <label>
        <input name="ratings" value="5" type="radio" checked/>
        <span> <i class="medium material-icons">sentiment_very_satisfied</i> Delicious!</span>
      </label>
      <label>
        <input name="ratings" value="4" type="radio"/>
        <span> <i class="medium material-icons">sentiment_satisfied</i> Tasty!</span>
      </label>
      <label>
        <input name="ratings" value="3" type="radio"/>
        <span> <i class="medium material-icons">sentiment_neutral</i> Okay</span>
      </label>
      <label>
        <input name="ratings" value="2" type="radio"/>
        <span> <i class="medium material-icons">sentiment_dissatisfied</i> Meh...</span>
      </label>
      <label>
        <input name="ratings" value="1" type="radio"/>
        <span> <i class="medium material-icons">sentiment_very_dissatisfied</i> Yuck!</span>
      </label>

      <div class="input-field">
        <textarea id="review_comment" class="materialize-textarea" required></textarea>
        <label for="review_comment">Rating Comments</label>
      </div>

      <div class="input-field">
        <input class="submit btn indigo" type="submit">
        <input class="reset btn red" type="reset">
      </div>
      <p class="hidden notice teal white-text center-align"></p>
    </form>
    <div class="comic-image valign-wrapper col s12 m4">
      <img src="https://imgplaceholder.com/450x600/ffffff/eeeeee/fa-image" alt="Cover Image">
    </div>`
}

const editReview = ({ id, title, url, rating, review }) => {
  return `
  <div class="editing" data-id="${ id }">
    <form id="edit-form" class="form col s12 m8">
      <h4>Editing ${ title }</h4>
      <div class="input-field">
        <span><label for="title">Title</label></span>
        <input id="title" name="title" type="text" data-length="50" class="validate" value="${ title }" required>
        <span class="helper-text" data-error="oops! something is wrong..." data-success="looking good!">example: Amazing Spiderman #1</span>
      </div>

      <div class="input-field">
        <span><label for="image_url">Image URL</label></span>
        <input id="image_url" name="url" type="url" pattern="^(http|https):([/|.|\\w|\\s|-])*\\.(?:jpg|gif|png)" class="validate" value="${ url }" required>
        <span class="helper-text" data-error="please use a valid image URL" data-success="looking good!"></span>
      </div>

      <label>
        <input name="ratings" value="5" type="radio" ${ rating === 5 ? 'checked' : ''}/>
        <span> <i class="medium material-icons">sentiment_very_satisfied</i> Love It!</span>
      </label>
      <label>
        <input name="ratings" value="4" type="radio" ${ rating === 4 ? 'checked' : ''}/>
        <span> <i class="medium material-icons">sentiment_satisfied</i> Good</span>
      </label>
      <label>
        <input name="ratings" value="3" type="radio" ${ rating === 3 ? 'checked' : ''}/>
        <span> <i class="medium material-icons">sentiment_neutral</i> Okay</span>
      </label>
      <label>
        <input name="ratings" value="2" type="radio" ${ rating === 2 ? 'checked' : ''}/>
        <span> <i class="medium material-icons">sentiment_dissatisfied</i> Meh...</span>
      </label>
      <label>
        <input name="ratings" value="1" type="radio" ${ rating === 1 ? 'checked' : ''}/>
        <span> <i class="medium material-icons">sentiment_very_dissatisfied</i> Hate It!</span>
      </label>
      <div class="input-field">
        <span><label for="review">Rating Comments</label></span>
        <textarea id="review" name="review" class="materialize-textarea" rows="5" required>${ review }</textarea>
      </div>
      <div class="input-field">
        <input class="btn indigo waves-effect waves-light" type="submit">
        <a class="btn waves-effect waves-light red" href="./ratings.html">Cancel</a>
      </div>
    </form>
    <div class="comic-image col s12 m4"><img src="${ url }" alt="${ title }"></div>
  </div>`
}

const grid = ({ id, name, img }) => {
  return `
  <div class="item col s12 m6 l3">
    <div class="card hoverable" data-id="${ id}">
      <div class="card-image waves-effect waves-block waves-light">
        <a href="./snack.html?id=${ id}">
          <img class="activator" src="${ img}" alt="${name}">
        </a>
      </div>
      <div class="card-content">
        <a href="./snack.html?id=${ id}">
          <span class="card-title">${ name}</span>
        </a>
      </div>
    </div>
  </div>`
}

const one = ({ id, name, img, description, price }) => {
  return `
  <div class="row" data-id="${ id }">
    <div class="valign-wrapper col s12 m4">
      <img class="z-depth-1" src="${ img }" alt="${ name }">
    </div>
    <div class="col s12 m8">
      <h3>${ name }</h3>
      <p class="price">$${ price }.00</p>
      <p>${ description }</p>
    </div>
  </div>`
}

const review = ({ id, title, rating, comment }) => {
  return `
  <div class="row" data-id="${ id }">
    <div class="details col s12">
      <h5>${ title }</h5>
      <p>${ starRating(rating) }</p>
      <p>${ comment }...</p>
    </div>
    <hr>
  </div>`
}

module.exports = {
  header,
  headerLogin,
  footer,
  form,
  grid,
  review,
  one,
  editReview
}
