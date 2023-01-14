export default `<h1>PROFILE PAGE</h1>
<div class="profile">
    <div class="profile__avatar avatar">
        <div class="avatar__icon">
            <img src="{{avatarEmpty}}" id="image1" width="50px" height="50px" />
            <span style="display: none"><input type="file" id="file1" /></span>
        </div>
        <div class="avatar__name"> Тут текст для картинки</div>
        
    </div>
    <div class="profile__fields fields">
        <div class="fields__field">
            <label for="first_name">Имя</label>
            <input type="text" name="first_name" id="first_name" placeholder="pochta@yandex.ru">
            
        </div>
        <div class="fields__field">
            <label for="second_name">Фамилия</label>
            <input type="text" name="second_name" id="second_name" placeholder="ivanIvanov">
        </div>
        <div class="fields__field">
            <label for="display_name">display_name</label>
            <input type="text" name="display_name" id="display_name" placeholder="ivanIvanov">
        </div>
        <div class="fields__field">
            <label for="login">login</label>
            <input type="text" name="login" id="login" placeholder="ivanIvanov">
        </div>
        <div class="fields__field">
            <label for="email">email</label>
            <input type="email" name="email" id="email" placeholder="ivanIvanov">
        </div>
        <div class="fields__field">
            <label for="phone">phone</label>
            <input type="tel" name="phone" id="phone" placeholder="ivanIvanov">
        </div>
        <div class="fields__field">
            <label for="oldPassword">oldPassword</label>
            <input type="password" name="oldPassword" id="oldPassword" placeholder="ivanIvanov">
        </div>
        <div class="fields__field">
            <label for="newPassword">newPassword</label>
            <input type="password" name="newPassword" id="newPassword" placeholder="ivanIvanov">
        </div>

    </div>
    <div class="profile__actions">
        <div><button type = "submit">Изменить данные</button></div>
    </div>
</div>
`
