# Generated by Django 2.2.4 on 2020-04-26 10:34

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('core', '0014_auto_20200426_0431'),
    ]

    operations = [
        migrations.AddField(
            model_name='order',
            name='place',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to='core.Place'),
        ),
    ]
