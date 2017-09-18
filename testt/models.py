from django.db import models

# Create your models here.
class MessageBase(models.Model):
    id = models.AutoField(primary_key=True)
    content = models.CharField(max_length=100)
    user_name = models.CharField(max_length=80)
    pub_date = models.DateField()

    class Meta:
        abstract = True


class Moment(MessageBase):
    headline = models.CharField(max_length=50)


LEVELS = (
    ('1', 'Very Good'),
    ('2', 'Good'),
    ('3', 'Normol'),
    ('4', 'Bad'),
)

class Comment(MessageBase):
    level = models.CharField(max_length=1, choices=LEVELS)
