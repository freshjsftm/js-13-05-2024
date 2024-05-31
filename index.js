switch (confirm('ви хочете покинути сайт?')) {
  case true:
    alert('до побачення');
    break;
  case false:
    alert('ми раді, що ви лишаєтесь з нами');
    break;
}

confirm('ви хочете покинути сайт?')
  ? alert('до побачення')
  : alert('ми раді, що ви лишаєтесь з нами');
