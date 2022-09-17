const basic_user_profile = () => {
  const userState = {
    userName: null,
    UserEmail: "@anything.com",
    score: 0,
    timeRemaining: 60,
    previousPrice: { price: 0, time: 0 },
    currentPrice: { price: 0, time: 0 },
    areButtonsLocked: false,
    selection: { text: "false", selection: "false" },
    gameCommenced: false,
    message: "",
  };

  return userState;
};

export default basic_user_profile;
