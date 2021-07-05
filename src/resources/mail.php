<?
  $email = 'seo.yarik@gmail.com';

  $json = file_get_contents('php://input');
  $data = json_decode($json);

  $form = $data->form;
  $name = $data->name;
  $phone = $data->phone;
  $link = $data->link;

  $header = 'Content-type: text/plain; charset="utf-8"';

  switch($form){
    case 'order':
      $packet = $data->packet;
      $message = sprintf("%s \n\nИмя: %s \n\nТелефон: %s \n\nСсылка: %s", $packet, $name, $phone, $link);
      mail($email, $packet, $message, $header);
      break;

    case 'cta':
      $packet = 'Другой пакет';
      $message = sprintf("%s \n\nИмя: %s \n\nТелефон: %s \n\nСсылка: %s", 'Другой пакет', $name, $phone, $link);
      mail($email, $packet, $message, $header);
      break;
  }

  echo 'ok';
?>