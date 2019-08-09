"""empty message

Revision ID: 7eefdf5d93c4
Revises: 136b2d0f435d
Create Date: 2019-07-16 22:35:43.866229

"""
from alembic import op
import sqlalchemy as sa
from sqlalchemy.dialects import postgresql

# revision identifiers, used by Alembic.
revision = '7eefdf5d93c4'
down_revision = '136b2d0f435d'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('document', sa.Column('create_user', sa.String(length=60), nullable=False),
                    sa.Column('create_timestamp', sa.DateTime(), nullable=False),
                    sa.Column('update_user', sa.String(length=60), nullable=False),
                    sa.Column('update_timestamp', sa.DateTime(), nullable=False),
                    sa.Column('document_id', sa.Integer(), nullable=False),
                    sa.Column('document_guid', postgresql.UUID(as_uuid=True), nullable=False),
                    sa.Column('full_storage_path', sa.String(length=4096), nullable=False),
                    sa.Column('upload_started_date', sa.DateTime(), nullable=False),
                    sa.Column('upload_completed_date', sa.DateTime(), nullable=True),
                    sa.Column('file_display_name', sa.String(length=255), nullable=False),
                    sa.Column('path_display_name', sa.String(length=4096), nullable=False),
                    sa.PrimaryKeyConstraint('document_id'))
    op.drop_table('document_manager')
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_table('document')
    # ### end Alembic commands ###