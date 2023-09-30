arruser = []
fetch('https://jsonplaceholder.typicode.com/users')
.then(response=> response.json())
.then(user=> {
    user.map((user)=>{
        let  id = document.createElement('Id')
        let name = document.createElement('name')
        let nickname = document.createElement('nickname')
        let email = document.createElement('email')
  console.log(user);
  id.textContent = user.id
name.textContent = user.body
nickname.textContent = user.nickname
email.textContent = user.email
  
  
  
        id.appendChild(name)
    id.appendChild(nickname)
    id.appendChild(email)
  document.body.appendChild(name)
 
    })
})