from app.api.utils.models_mixins import Base
from app.extensions import db


class ExistingSettlingPondXref(Base):
    __tablename__ = "existing_settling_pond_xref"
    __table_args__ = { "schema": "now_submissions" }
    messageid = db.Column(db.Integer, db.ForeignKey('now_submissions.application.messageid'), primary_key=True)
    settlingpondid = db.Column(db.Integer, db.ForeignKey('now_submissions.settling_pond.settlingpondid'), primary_key=True)


    def __repr__(self):
        return '<ExistingSettlingPondXref %r>' % self.messageid
