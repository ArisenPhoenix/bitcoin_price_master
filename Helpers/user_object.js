class User {
  constructor({
    userName,
    email,
    score,
    timeRemaining,
    previousPrice,
    timeOfPrevious,
    currentPrice,
    timeOfCurrent,
    areButtonsLocked,
    selection,
    gameCommenced,
    message,
  }) {
    this.userName = userName;
    this.email = email;
    this.previousPrice = previousPrice;
    this.currentPrice = currentPrice;
    this.score = score;
    this.timeRemaining = timeRemaining;
    this.areButtonsLocked = areButtonsLocked;
    this.timeOfPrevious = timeOfPrevious;
    this.timeOfCurrent = timeOfCurrent;
    this.selection = selection;
    this.gameCommenced = gameCommenced;
    this.message = message;
    this.user = this.email + this.userName;
    this.userObject = {
      // Searching by this one to avoid conflicts with same names
      user: this.user,
      userName: this.userName,
      email: this.email,
      previousPrice: this.previousPrice,
      currentPrice: this.currentPrice,
      timeOfCurrent: this.timeOfCurrent,
      timeOfPrevious: this.timeOfPrevious,
      score: this.score,
      timeRemaining: this.timeRemaining,
      areButtonsLocked: this.areButtonsLocked,
    };
  }

  update(updatedObject) {
    // If ever needed
    const newObject = {
      ...this.userObject,
      ...updatedObject,
    };
    return newObject;
  }
}

export default User;
