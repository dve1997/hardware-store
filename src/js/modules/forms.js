const forms = () => {
  function form() {
    const form = document.querySelectorAll("form"),
      inputsPhone = document.querySelectorAll("input[name='user_phone']");

    inputsPhone.forEach((item) => {
      item.addEventListener("input", (e) => {
        item.value = item.value.replace(/\D/, "");
      });
    });

    const messeng = {
      loading: "Идет отправка формы...",
      complite: "Спасибо! Мы скоро с Вами свяжемся!",
      failed: "Произошла ошибка...",
    };

    form.forEach((item) => {
      item.addEventListener("submit", (e) => {
        e.preventDefault();

        function createElem(status) {
          let messElemLoading = document.createElement("div");
          let messElemDone = document.createElement("div");

          if (status === messeng.loading) {
            messElemLoading.classList.add("delete");
            messElemLoading.textContent = `${status}`;
            item.append(messElemLoading);
          } else {
            document.querySelector(".delete").remove();
            messElemDone.textContent = `${status}`;
            item.append(messElemDone);
            item.reset();
            setTimeout(() => {
              messElemDone.remove();
            }, 3000);
          }
        }

        createElem(messeng.loading);

        const formData = new FormData(item);

        fetch("assets/server.php", {
          method: "POST",
          body: formData,
        })
          .then((prom) => prom.text())
          .then((data) => {
            console.log(data);
            createElem(messeng.complite);
          })
          .catch((error) => {
            console.log(error);
            createElem(messeng.failed);
          });
      });
    });
  }

  form();
};

export default forms;
