CREATE TABLE public.report_developer_test_of_time_function
(
    user_email varchar NOT NULL,
    report_id uuid NOT NULL,
    developer_rank integer NOT NULL,
    node_id varchar NOT NULL,
    CONSTRAINT report_developer_ttf_email_node_report_pkey PRIMARY KEY (user_email, node_id, report_id)
)
TABLESPACE pg_default;

ALTER TABLE public.report_developer_test_of_time_function
    OWNER to postgres;

CREATE INDEX report_developer_test_of_time_function_report_id_idx
    ON public.report_developer_test_of_time_function USING btree
    (report_id ASC NULLS LAST)
    TABLESPACE pg_default;
