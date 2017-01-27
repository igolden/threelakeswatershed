---
location: 'about'
head:
  title: Contact Us
  subtitle:
style:
  id: 'about'
  class: 'dark'
  media:
    img:
      url_path:
      pattern: false
      parallax: false
      overlay:
      blur: false
  tint_color: 'rgba(0,0,0,0.0)'
cta:
  headline:
  btnText:
  btnType:
  btnLink:
  subtext:
---

​

<div class="col-sm-9">
    <h4 class="text-left">Contact Us</h4>
    {% include widgets/contact-form.html email="info@threelakeswater.org"%}
</div>


<div class="col-sm-3">
<h4 class="text-left">Connect</h4>
{% include social-links.html %}

<h4 class="text-left">Visit Us</h4>
{% include widgets/visit-us.html %}
</div>
