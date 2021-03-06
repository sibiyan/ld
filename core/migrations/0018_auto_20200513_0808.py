# Generated by Django 2.2.4 on 2020-05-13 02:38

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('core', '0017_userprofile_is_customer'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='order',
            options={'ordering': ['start_date', 'pk']},
        ),
        migrations.RemoveField(
            model_name='address',
            name='phone_num',
        ),
        migrations.AddField(
            model_name='address',
            name='phone_number',
            field=models.CharField(blank=True, max_length=10, null=True),
        ),
        migrations.AddField(
            model_name='address',
            name='village',
            field=models.CharField(blank=True, max_length=100, null=True),
        ),
        migrations.AlterField(
            model_name='address',
            name='default',
            field=models.BooleanField(default=True),
        ),
        migrations.AlterField(
            model_name='order',
            name='order_status',
            field=models.CharField(blank=True, choices=[('Not Accepted by Shop', 'Not Accepted by Shop'), ('Accepted by Shop', 'Accepted by Shop'), ('Under process', 'Under process'), ('On the way', 'On the way'), ('Delivered', 'Delivered')], default='Not Accepted by Shop', max_length=200, null=True),
        ),
        migrations.DeleteModel(
            name='Payment',
        ),
    ]
