<template>
	<main>
		<section class="page-name">
			<div class="container page-name__wrp">
				<h2 class="page-name__title">registration</h2>
			</div>
		</section>
		<section class="reg">
			<div class="container reg__wrp">
				<h2 class="visually-hidden">registration form</h2>
				<form class="reg__form" action="#">
					<fieldset>
						<label class="reg__form-title" for="name">Your Name</label><br>
						<div style="height: 20px;"></div>
						<input class="reg__form-input" type="text" id="name" required placeholder="First Name">
						<p class="reg__form-text invisible-text">Пожалуйста, введите корректное имя (только буквы)</p>
						<input class="reg__form-input" type="text" id="lastName" required placeholder="Last Name"><br>
						<p class="reg__form-text invisible-text">Пожалуйста, введите корректную фамилию (только буквы)</p>
						<div class="reg__form-checked">
							<input type="radio" id="genderMale" name="gender" value="male">
							<label for="genderMale">Male</label>
							<input type="radio" id="genderFemale" name="gender" value="female">
							<label for="genderFemale">Female</label>
							<input type="radio" id="other" name="gender" value="other">
							<label for="other">Other</label>
						</div>
					</fieldset>
					<fieldset>
						<label class="reg__form-title" for="email">Login details</label><br>
						<div style="height: 20px;"></div>
						<input class="reg__form-input" type="email" id="email" required placeholder="Email">
						<p class="reg__form-text invisible-text">Пожалуйста, введите корректный email-адрес</p>
						<input class="reg__form-input" type="phone" id="phone" required placeholder="Phone">
						<p class="reg__form-text invisible-text">Пожалуйста, введите номер телефона в формате: +7(xxx)xxx-xxxx</p>
						<input class="reg__form-input" type="password" id="password" required placeholder="Password">
					</fieldset>
					<p class="reg__form-text-password" >Please use 8 or more characters, with at least 1 number and
						a mixture of uppercase and lowercase letters</p>
					<button class="reg__form-btn btn">
						join now &nbsp;&nbsp;
						<img src="../../public/img/arrow.png" alt="">
					</button>
				</form>
				<div class="reg__info">
					<h2 class="reg__info-title">loyalty has its perks</h2>
					<p class="reg__info-text">Get in on the loyalty program where you can earn points and unlock
						serious perks. Starting with these as soon as you join:</p>
					<ul class="reg__info-list">
						<li class="reg__info-item">15% off welcome offer</li>
						<li class="reg__info-item">Free shipping, returns and exchanges on all <br> orders</li>
						<li class="reg__info-item">$10 off a purchase on your birthday</li>
						<li class="reg__info-item">Early access to products</li>
						<li class="reg__info-item">Exclusive offers & rewards</li>
					</ul>
				</div>
			</div>
		</section>
	</main>
</template>

<script>
	export default {
		name: "RegPage",
	}
</script>