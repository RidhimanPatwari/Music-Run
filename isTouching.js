function isTouching(arg1, arg2) {
    if (arg1.x - arg2.x < arg2.width/2 + arg1.width/2
        && arg2.x - arg1.x < arg2.width/2 + arg1.width/2
        && arg1.y - arg2.y < arg2.height/2 + arg1.height/2
        && arg2.y - arg1.y < arg2.height/2 + arg1.height/2) {
      return true; 
    }
    else {
      return false; 
    }
  }