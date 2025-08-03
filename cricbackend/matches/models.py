from django.db import models

# Create your models here.
class Match(models.Model):
    team_A = models.CharField(max_length=25)
    team_B = models.CharField(max_length=25)
    noOfOvers = models.PositiveIntegerField()
    toss = models.CharField(max_length=25)
    battingFirst = models.CharField(max_length=25)
    createdAt = models.DateTimeField(auto_now_add=True)
    
    def __str__(self):
        return f"{self.team_A} vs {self.team_B}"
