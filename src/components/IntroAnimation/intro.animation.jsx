.intro-text {
    color: black;
    font-size: 2em;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    white-space: nowrap;
    /* overflow: hidden; */
    width: 0;
    border-right: 3px solid white;
  
    /* Fade out animation */
    animation: fadeOut 4s forwards;
  
    /* Typing animation */
    /* animation: typing 4s steps(60, end), blink-caret 0.6s step-end infinite; */
}
  
/* Typing effect */
@keyframes typing {
    from {
      width: 0;
    }
    to {
      /* Change this value for thw width of the message */
      width: 300px;
    }
  }
  
  /* Cursor animations */
  @keyframes blink-caret {
    from,
    to {
      border-color: transparent;
    }
    50% {
      border-color: black;
    }
  }
  