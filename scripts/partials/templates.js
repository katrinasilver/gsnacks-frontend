const { starRating } = require('./utils')
const { getOne } = require('./requests')
const path = window.location.pathname
const uid = localStorage.getItem('id')

const header = () => {
  return `
  <nav class="red darken-3">
    <div class="nav-wrapper container">
      <a href="/" class="brand-logo">
        gSNACKS
      </a>
      <ul id="nav-mobile" class="right hide-on-med-and-down">
        <li class="">
          <a href=${path === '/login.html' ? "./signup.html" : path === '/' || path === '/signup.html' || path === '/index.html' ? "./login.html" : "./index.html" }><i class="tiny material-icons">account_circle</i>
            ${ path === '/' || path === '/signup.html' || path === '/index.html' || path === '/snack.html'  ? 'Login' : path === '/login.html' ? 'Signup' : 'Logout' }
          </a>
        </li>
      </ul>
    </div>
  </nav>`
}

const footer = () => {
  return `
    <div class="container footer-copyright">
      <p class="white-text center">
        <strong>&copy; 2018 gSnacks</strong> by <a href="https://katrina.surge.sh" target="_blank">Katrina Agustin</a>
      </p>
    </div>`
}

const grid = ({ id, name, img }) => {
  return `
  <div class="col s12 m6 l4">
    <div class="card hoverable" data-id="${id}">
      <div class="valign-wrapper card-image">
        <img src="${img}">
        <span class="card-title">${name}</span>
      </div>
      <div class="card-action">
        <a class="red-text" href="./snack.html?id=${id}">
          See Ratings
          <i class="material-icons">arrow_right</i>
        </a>
      </div>
    </div>
  </div>`
}

const one = ({ id, name, img, description, price }) => {
  return `
  <div class="one" data-id="${id}">
  <div class="image col s12 m11">
      <h4 class="red-text">${name}</h4>
      <img class="z-depth-1" src="${img}" alt="${name}">
    </div>
    <a href="/" class="btn waves-effect waves-light green edit">See More Snacks</a>
    <a ${ uid === null ? 'href="./login.html"' : ''} class="btn waves-effect waves-light green ${uid !== null ? 'trigger' : '' }">
    ${ uid !== null ? 'Rate This!' : 'Login to Post a Review' }
    </a>
    <h5 class="price"><span class="green-text">Member Price:</span> $${price}.00</h5>
    <p>${description}</p>
  </div>`
}

const user = () => `<div class="reviewer green-text">Who is logged in? ${ getOne(uid).then(response => console.log(response.data[0].firstName)).then(name => name).catch(error => error)}</div>`

const review = ({ id, account_id, title, rating, comment }) => {
  const name = () => {
    getOne(account_id)
      .then(response => console.log(response.data[0].firstName))
      .then(name => name).catch(error => error)
  }
  return `
  <div data-id="${id}">
    <div class="details">
      <h5 class="grey-text">${title}</h5>
      <div class="reviewer green-text">Who posted the review? ${ name() }</div>
      ${ user() }
      <p>${starRating(rating)}</p>
      <p>${comment}</p>
      ${ account_id !== parseInt(uid) ? '' :
        '<button class="btn tiny waves-effect waves-light red edit">Edit</button>&nbsp;<button class="btn tiny waves-effect waves-light red delete">Delete</button>' }
    </div>
    <hr>
  </div>`
}

const form = () => {
  return `
  <form id="form" class="form collapsed">
    <p class="hidden notice orange white-text center-align"></p>
    <div class="input-field">
      <input id="title" type="text" data-length="50" class="validate" required>
      <label for="title">Title</label>
      <span class="helper-text" data-error="oops! something is wrong..." data-success="looking good!"></span>
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
      <textarea id="comment" class="materialize-textarea" required></textarea>
      <label for="comment">Comments</label>
    </div>

    <div class="input-field">
      <input class="btn green reset" type="reset" value="Cancel">
      <input class="submit btn green" type="submit">
    </div>
  </form> <hr>`
}

const editReview = ({ id, title, url, rating, comment }) => {
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
        <textarea id="review" name="review" class="materialize-textarea" rows="5" required>${ comment }</textarea>
      </div>
      <div class="input-field">
        <input class="btn indigo waves-effect waves-light" type="submit">
        <a class="btn waves-effect waves-light red" href="./ratings.html">Cancel</a>
      </div>
    </form>
    <div class="comic-image col s12 m4"><img src="${ url }" alt="${ title }"></div>
  </div>`
}

module.exports = {
  header,
  footer,
  form,
  grid,
  review,
  one,
  editReview
}
