<script setup>
    import LeftIcon from './icons/left.vue'
</script>

<template>
    <div id="headline">
        <span class="headline__title">Obserwowane kanały:</span>
        <LeftIcon id="btn-AsideMenu" />
    </div>

    <div id="watchedChannels">
        <div class="watchedChannels__item">
            <img src="../assets/images/avatar.jpg" alt="Aria Sweeney" class="avatar">
            <div class="userDescript">
                <span class="nick">Aria Sweeney</span>
                <p class="description">Assassin's Creed</p>
            </div>
            <div class="status status-online"></div>
        </div>

        <div class="watchedChannels__item">
            <img src="../assets/images/avatar.jpg" alt="Aria Sweeney" class="avatar">
            <div class="userDescript">
                <span class="nick">Aria Sweeney</span>
                <p class="description">Assassin's Creed</p>
            </div>
            <div class="status status-offline"></div>
        </div>

        <div class="watchedChannels__item">
            <img src="../assets/images/avatar.jpg" alt="Aria Sweeney" class="avatar">
            <div class="userDescript">
                <span class="nick">Aria Sweeney</span>
                <p class="description">Assassin's Creed</p>
            </div>
            <div class="status status-online"></div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    #headline {
        width: 100%;
        padding: 11% 0;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    .headline__title {
        color: var(--blue);
        font-size: 17px;
        font-weight: bold;
    }

    #btn-AsideMenu {
        width: 35px;
        height: 35px;
        fill: var(--gray);
    }

    #btn-AsideMenu:hover {
        cursor: pointer;
        fill: var(--white);
    }

    #watchedChannels {
        width: 100%;
        height: 52%;
        border-bottom: 3px solid var(--main2);
    }

    .watchedChannels__item {
        width: 100%;
        height: 40px;
        margin-bottom: 20px;
        display: grid;
        grid-template-columns: 40px auto 12px;
        align-items: center;
        gap: 14px;
    }

    .avatar {
        height: 40px;
        width: 40px;
        border-radius: 50%;
    }

    .userDescript {
        display: flex;
        flex-direction: column;
    }

    .description {
        color: var(--gray);
        font-size: 14px;
    }

    .status {
        width: 12px;
        height: 12px;
        border-radius: 50%;
    }

    .status-online {
        background-color: var(--green);
    }

    .status-offline {
        background-color: var(--red);
    }
</style>