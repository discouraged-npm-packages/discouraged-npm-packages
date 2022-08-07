const db = 'https://cdn.jsdelivr.net/gh/discouraged-npm-packages/discouraged-npm-packages@master/db.json'
const res = await fetch(db)
const data = await res.json()

/** @typedef {string} PackageName */
/** @typedef {number} DiscussionId */

class Discourage {

  /** @type {DiscussionId} */
  id = 0
  /** @type {PackageName} */
  pkg = ''

  yes = 0

  no = 0

  get voted () {
    return this.yes + this.no
  }

  get percentage () {
    return this.yes / this.voted * 100
  }
}

/** @type {Object<PackageName, Discourage>} */
const map = {}

data.forEach(d => {
  d = d.split(',')
  var p = new Discourage()
  p.pkg = d[0]; p.id = +d[1]; p.yes = +d[2]; p.no = +d[3]
  map[p.pkg] = p
})

export default map