const encrypt = require('../modules/encrypt.js')

module.exports = function (server, db) {

  server.get('/data/classes', (req, res) => {
    let query = "SELECT id, name,shortName FROM classes"
    let result = db.prepare(query).all()
    res.setHeader('Content-Range', result.length);
    res.setHeader('X-Total-Count', result.length);
    res.json(result)
  })

  /*  // registrera en ny lärare
   server.post('/data/classes', (request, response) => {
     let user = request.body
     let encryptedPassword = encrypt(user.password)
     let result
     try {
       result = db.prepare('INSERT INTO teachers (email, password) VALUES(?,?)').run([user.email, encryptedPassword])
     } catch (e) {
       console.error(e)
     }
     response.json(result)
   })
 
 
   // komplettera profil för användare
   server.put('/data/teachers', (request, response) => {
     let user = request.body
     let result
     try {
       result = db.prepare('UPDATE teachers SET firstname = ?, lastname = ?, initials = ?, phone = ?, color = ?, hide = ? WHERE email = ?').run([user.firstname, user.lastname, user.initials, user.phone, user.color, user.hide, user.email])
     } catch (e) {
       console.error(e)
     }
     response.json(result)
   })
 
 
   // begär ändring av lösenord för användare
   server.delete('/data/teachers/password', (request, response) => {
     let user = request.body
     let result
     try {
       result = db.prepare('UPDATE teachers SET password = NULL WHERE email = ? AND hide = 0').run([user.email])
     } catch (e) {
       console.error(e)
     }
     response.json(result)
   })
 
 
   // ändra lösenord för användare
   server.patch('/data/teachers/password', (request, response) => {
     let user = request.body
     let encryptedPassword = encrypt(user.password)
     let result
     try {
       result = db.prepare('UPDATE teachers SET password = ? WHERE password IS NULL AND email = ?').run([encryptedPassword, user.email])
     } catch (e) {
       console.error(e)
     }
     response.json(result)
   }) */


}