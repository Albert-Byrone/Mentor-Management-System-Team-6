"""Removed Messages associations

Revision ID: 066c0bca01cc
Revises: 6158b616a6a1
Create Date: 2023-05-03 02:50:31.169890

"""
from alembic import op

# revision identifiers, used by Alembic.
revision = '066c0bca01cc'
down_revision = '6158b616a6a1'
branch_labels = None
depends_on = None


def upgrade() -> None:
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_constraint('messages_sender_id_fkey', 'messages', type_='foreignkey')
    # ### end Alembic commands ###


def downgrade() -> None:
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_foreign_key('messages_sender_id_fkey', 'messages', 'users', ['sender_id'], ['id'])
    # ### end Alembic commands ###
