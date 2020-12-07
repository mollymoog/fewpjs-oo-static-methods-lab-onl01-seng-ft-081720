class Formatter {

  static capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  static sanitize(string) {
    return string.replace(/[^A-Z a-z 0-9 '-]/g, '');
  }

  static titleize(string) {
    const stringArray = string.split(" ");
    const forbidden = [ "a", "an", "but", "of", "and", "for", "at", "by", "from", "the"]
    let newString = []

    for ( let i = 0; i < stringArray.length; i++ ) {
      if ( i == 0 ) {
        newString.push(this.capitalize( stringArray[ i ]));
      } else {
        if (forbidden.includes(stringArray[i])) {
          newString.push(stringArray[i]);
        }
        else {
          newString.push(this.capitalize(stringArray[ i ]));
        }
      }
    }
    
    
    return newString.join(" ");
  }
}