
  const mainImage = document.getElementById('main-image');
  const thumbnails = document.querySelectorAll('.thumbnail');
  const images = ['img1.png', 'img2.png', 'img3.png', 'img4.png'];
  let currentIndex = 0;

  // Показать изображение по индексу
  function showImage(index) {
    mainImage.src = images[index];
    thumbnails.forEach(thumb => thumb.classList.remove('active'));
    thumbnails[index].classList.add('active');
    currentIndex = index;
  }

  // Обработка кликов на миниатюры
  thumbnails.forEach((thumb, index) => {
    thumb.addEventListener('click', () => {
      showImage(index);
    });
  });

  // Стрелки
  document.querySelector('.nav-btn.left').addEventListener('click', () => {
    const newIndex = (currentIndex - 1 + images.length) % images.length;
    showImage(newIndex);
  });

  document.querySelector('.nav-btn.right').addEventListener('click', () => {
    const newIndex = (currentIndex + 1) % images.length;
    showImage(newIndex);
  });

  // Изначально показать первое изображение
  showImage(0);


  const track = document.querySelector('.slider-track');
  const prevBtn = document.getElementById('prevBtn');
  const nextBtn = document.getElementById('nextBtn');

  const slideWidth = 310; // ширина одного слайда + gap
  let position = 0; // начальная позиция

  nextBtn.addEventListener('click', () => {
    const maxScroll = -(track.scrollWidth - 930); // ширина всех карточек минус видимая часть
    if (position > maxScroll) {
      position -= slideWidth * 1; // пролистываем на 1 карточку
      track.style.transform = `translateX(${position}px)`;
    }
  });

  prevBtn.addEventListener('click', () => {
    if (position < 0) {
      position += slideWidth * 1;
      track.style.transform = `translateX(${position}px)`;
    }
  });