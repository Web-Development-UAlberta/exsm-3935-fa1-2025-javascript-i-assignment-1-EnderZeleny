// eslint-disable-next-line no-unused-vars
/* global output, input */
// eslint-disable-next-line no-unused-vars
async function main() {
  // This is where the code you're actually experimenting with goes.
  {
    // First Name
    const firstnameprompt = "What is your first name? ";
    let firstname = await input(firstnameprompt);
    //Last Name
    const lastnameprompt = "What is your last name? ";
    let lastname = await input(lastnameprompt);
    //Full Name
    let fullname = firstname + " " + lastname
    let fullnameoutput = fullname.replace( "o", "a" )
    output(fullnameoutput)
  }
  {
    const largerthantenprompt = "Please give a number larger than 10. "
    let largerthanten = await input(largerthantenprompt)

    const lessthantenprompt = "Please give a number less than 10. "
    let lessthanten = await input(lessthantenprompt)

    let mathoutput = largerthanten % lessthanten

    output("The remainder of " + largerthanten + " divided by " + lessthanten + " is " + mathoutput)
  }
}

