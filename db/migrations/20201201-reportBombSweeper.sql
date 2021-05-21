CREATE TABLE public.report_contributor_bomb_sweeper
(
    user_email varchar NOT NULL,
    report_id uuid NOT NULL,
    bomb_count integer NOT NULL,
    CONSTRAINT report_user_email_pkey PRIMARY KEY (user_email, report_id)
)
TABLESPACE pg_default;

ALTER TABLE public.report_contributor_bomb_sweeper
    OWNER to postgres;

CREATE INDEX report_contributor_bomb_sweeper_report_id_idx
    ON public.report_contributor_bomb_sweeper USING btree
    (report_id ASC NULLS LAST)
    TABLESPACE pg_default;
