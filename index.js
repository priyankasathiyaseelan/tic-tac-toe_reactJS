body {
    font: 24px 'Century Gothic', Futura, sans-serif;
    margin: 20px;
  }
  
  ol,
  ul {
    padding-left: 30px;
  }
  
  .board-row:after {
    clear: both;
    content: '';
    display: table;
  }
  
  .status {
    margin-bottom: 10px;
  }
  
  .square {
    background: #fff;
    border: 1px solid #999;
    float: left;
    font-size: 24px;
    font-weight: bold;
    line-height: 34px;
    height: 54px;
    margin-right: -1px;
    margin-top: -1px;
    padding: 0;
    text-align: center;
    width: 54px;
  }
  
  .square--green {
    background: green;
  }
  
  .square:focus {
    outline: none;
  }
  
  .kbd-navigation .square:focus {
    background: #ddd;
  }
  
  .game {
    display: flex;
    flex-direction: row;
  }
  
  .game-info {
    margin-left: 20px;
  }
  
  .button {
    background-color: #555555; /* Green */
    border: none;
    color: #fff;
    padding: 5px 10px;
    text-align: center;
    text-decoration: none;
    font-size: 14px;
    cursor: pointer;
  }
  
  .button--green {
    background-color: #4caf50;
    color: #000;
    font-weight: bold;
  }
  
  .button--new-game {
    background-color: #bb3219;
    color: #000;
    font-weight: bold;
    margin-left: 2px;
  }