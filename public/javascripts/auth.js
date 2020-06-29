const signin = document.querySelector('.signin')
const signup = document.querySelector('.signup')

const username = document.querySelector(".username")
const password = document.querySelector(".password")
const confpass = document.querySelector(".confpass")
const email = document.querySelector(".email")

// Event listener for signin
signin.addEventListener("click", async () => {
    try {
      const res = await axios.post("https://localhost:3000/signin", {
        username: username.value,
        password: password.value
      })
      // Successful signin, server sending user chat page HTML
      console.log(res.data)
    }
    catch (err) {
      console.log("User not found") 
    }
    

})

// Event listener for signup
signup.addEventListener("click", async () => {
    if (!username.value) {
        console.log("No username")
        return
    }
    if (!password.value) {
        console.log("No password")
        return
    }
    if (!confpass.value) {
        console.log("No confpass")
        return
    }
    if (!email.value) {
        console.log("No email")
        return
    }
    if (password.value !== confpass.value) {
        console.log("Passwords do not match")
        return
    }

    try {
        const res = await axios.post("http://localhost:3000/signup", {
            username: username.value,
            password: password.value,
            email: email.value
        })
        console.log(res.data)
    }
    catch (err) {
        console.log("Signup failed")
    }
})
