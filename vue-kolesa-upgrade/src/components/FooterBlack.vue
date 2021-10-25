<template>
    <footer class="footer">
        <div class="container">
            <div class="footer__wrapper">
                <div class="footer__social">
                    <span class="footer__copyright"> © Kolesa Group </span>
                    <div class="footer__icons">
                        <a href="https://vk.com/kolesakz" target="_blank"
                            ><img
                                src="@/assets/VK.png"
                                alt="VK"
                                class="footer__icon"
                        /></a>
                        <a
                            href="https://www.youtube.com/user/kolesakzvideo"
                            target="_blank"
                            ><img
                                src="@/assets/YouTube.png"
                                alt="YouTube"
                                class="footer__icon"
                        /></a>
                        <a
                            href="https://www.instagram.com/kolesagroup/"
                            target="_blank"
                            ><img
                                src="@/assets/Instagram.png"
                                alt="Instagram"
                                class="footer__icon"
                        /></a>
                    </div>
                </div>
                <div class="footer__contact">
                    <span class="footer__desc">
                        Есть идеи что улучшить?<br />Не знаешь, с кем решить
                        проблему?
                    </span>
                    <button class="btn btn--white">Написать</button>
                </div>
            </div>
        </div>
    </footer>
</template>
<script>
export default {
    name: "Footer",
};
</script>
