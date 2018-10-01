export default {
  core: {
    airflow_home: '',
    dags_folder: '',
    base_log_folder: '',
    remote_logging: '',
    remote_log_conn_id: '',
    remote_base_log_folder: '',
    encrypt_s3_logs: '',
    logging_level: '',
    fab_logging_level: '',
    logging_config_class: '',
    log_format: '',
    simple_log_format: '',
    log_filename_template: '',
    log_processor_filename_template: '',
    hostname_callable: '',
    default_timezone: '',
    executor: '',
    sql_alchemy_conn: '',
    sql_alchemy_pool_enabled: '',
    sql_alchemy_pool_size: '',
    sql_alchemy_pool_recycle: '',
    sql_alchemy_reconnect_timeout: '',
    parallelism: '',
    dag_concurrency: '',
    dags_are_paused_at_creation: '',
    non_pooled_task_slot_count: '',
    max_active_runs_per_dag: '',
    load_examples: '',
    plugins_folder: '',
    fernet_key: '',
    donot_pickle: '',
    dagbag_import_timeout: '',
    task_runner: '',
    default_impersonation: '',
    security: '',
    secure_mode: '',
    unit_test_mode: '',
    task_log_reader: '',
    enable_xcom_pickling: '',
    killed_task_cleanup_time: '',
    dag_run_conf_overrides_params: '',
    worker_precheck: '',
  },
  cli: { api_client: '', endpoint_url: '' },
  api: { auth_backend: '', backend: '' },
  atlas: {
    sasl_enabled: '',
    host: '',
    port: '',
    username: '',
    password: '',
  },
  operators: {
    default_owner: '',
    default_cpus: '',
    default_ram: '',
    default_disk: '',
    default_gpus: '',
  },
  hive: { default_hive_mapred_queue: '', mapred_job_name_template: '' },
  webserver: {
    base_url: '',
    web_server_host: '',
    web_server_port: '',
    web_server_ssl_cert: '',
    web_server_ssl_key: '',
    web_server_master_timeout: '',
    web_server_worker_timeout: '',
    worker_refresh_batch_size: '',
    worker_refresh_interval: '',
    secret_key: '',
    workers: '',
    worker_class: '',
    access_logfile: '',
    error_logfile: '',
    expose_config: '',
    authenticate: '',
    filter_by_owner: '',
    owner_mode: '',
    dag_default_view: '',
    dag_orientation: '',
    demo_mode: '',
    log_fetch_timeout_sec: '',
    hide_paused_dags_by_default: '',
    page_size: '',
    rbac: '',
    navbar_color: '',
    default_dag_run_display_number: '',
    ssl_key: '',
    ssl_cert: '',
  },
  email: { email_backend: '' },
  smtp: {
    smtp_host: '',
    smtp_starttls: '',
    smtp_ssl: '',
    smtp_user: '',
    smtp_password: '',
    smtp_port: '',
    smtp_mail_from: '',
  },
  celery: {
    celery_app_name: '',
    worker_concurrency: '',
    worker_log_server_port: '',
    broker_url: '',
    result_backend: '',
    flower_host: '',
    flower_url_prefix: '',
    flower_port: '',
    default_queue: '',
    celery_config_options: '',
    ssl_active: '',
    ssl_cacert: '',
    cacert: '',
  },
  celery_broker_transport_options: { visibility_timeout: '' },
  dask: {
    cluster_address: '',
    tls_ca: '',
    tls_cert: '',
    tls_key: '',
  },
  scheduler: {
    job_heartbeat_sec: '',
    scheduler_heartbeat_sec: '',
    run_duration: '',
    min_file_process_interval: '',
    dag_dir_list_interval: '',
    print_stats_interval: '',
    child_process_log_directory: '',
    scheduler_zombie_task_threshold: '',
    catchup_by_default: '',
    max_tis_per_query: '',
    statsd_on: '',
    statsd_host: '',
    statsd_port: '',
    statsd_prefix: '',
    max_threads: '',
  },
  ldap: {
    uri: '',
    user_filter: '',
    user_name_attr: '',
    group_member_attr: '',
    superuser_filter: '',
    data_profiler_filter: '',
    bind_user: '',
    bind_password: '',
    basedn: '',
    search_scope: '',
  },
  mesos: {
    master: '',
    framework_name: '',
    task_cpu: '',
    task_memory: '',
    checkpoint: '',
    failover_timeout: '',
    default_principal: '',
    default_secret: '',
    docker_image_slave: '',
    principal: '',
  },
  kerberos: {
    ccache: '',
    reinit_frequency: '',
    kinit_path: '',
    keytab: '',
  },
  github_enterprise: { api_rev: '' },
  admin: { hide_sensitive_variable_fields: '' },
  elasticsearch: {
    elasticsearch_host: '',
    elasticsearch_log_id_template: '',
    elasticsearch_end_of_log_mark: '',
  },
  kubernetes: {
    worker_container_repository: '',
    worker_container_tag: '',
    worker_container_image_pull_policy: '',
    worker_dags_folder: '',
    delete_worker_pods: '',
    namespace: '',
    airflow_configmap: '',
    dags_volume_subpath: '',
    dags_volume_claim: '',
    logs_volume_subpath: '',
    logs_volume_claim: '',
    git_repo: '',
    git_branch: '',
    git_user: '',
    git_password: '',
    git_subpath: '',
    git_sync_container_repository: '',
    git_sync_container_tag: '',
    git_sync_init_container_name: '',
    worker_service_account_name: '',
    image_pull_secrets: '',
    gcp_service_account_keys: '',
    in_cluster: '',
  },
}